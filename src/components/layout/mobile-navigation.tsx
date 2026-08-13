"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { siteNavigationItems } from "@/components/layout/site-navigation";

export function MobileNavigation() {
  const pathname = usePathname();

  const [open, setOpen] =
    useState(false);

  const triggerRef =
    useRef<HTMLButtonElement>(
      null,
    );

  const menuRef =
    useRef<HTMLDivElement>(
      null,
    );

  const firstLinkRef =
    useRef<HTMLAnchorElement>(
      null,
    );

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(min-width: 1280px)",
      );

    const handleChange = () => {
      if (
        mediaQuery.matches
      ) {
        setOpen(false);
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleChange,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange,
      );
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const animationFrame =
      window.requestAnimationFrame(
        () => {
          firstLinkRef.current?.focus();
        },
      );

    return () => {
      window.cancelAnimationFrame(
        animationFrame,
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === "Escape"
      ) {
        event.preventDefault();

        setOpen(false);

        window.requestAnimationFrame(
          () => {
            triggerRef.current?.focus();
          },
        );

        return;
      }

      if (
        event.key !== "Tab"
      ) {
        return;
      }

      const menu =
        menuRef.current;

      if (!menu) {
        return;
      }

      const focusableElements =
        Array.from(
          menu.querySelectorAll<HTMLElement>(
            [
              "a[href]",
              "button:not([disabled])",
              '[tabindex]:not([tabindex="-1"])',
            ].join(","),
          ),
        ).filter(
          (element) =>
            !element.hasAttribute(
              "disabled",
            ),
        );

      if (
        focusableElements.length ===
        0
      ) {
        return;
      }

      const firstElement =
        focusableElements[0];

      const lastElement =
        focusableElements[
          focusableElements.length -
            1
        ];

      const activeElement =
        document.activeElement;

      if (
        event.shiftKey &&
        activeElement ===
          firstElement
      ) {
        event.preventDefault();

        lastElement.focus();

        return;
      }

      if (
        !event.shiftKey &&
        activeElement ===
          lastElement
      ) {
        event.preventDefault();

        firstElement.focus();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={
          open
            ? "Menüyü kapat"
            : "Menüyü aç"
        }
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        onClick={() => {
          setOpen(
            (current) =>
              !current,
          );
        }}
        className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#292929] bg-[#101010] transition-colors hover:border-[#444444] hover:bg-[#171717]"
      >
        <span
          aria-hidden="true"
          className="relative block h-[16px] w-[19px]"
        >
          <span
            className={[
              "absolute left-0 top-[4px]",
              "h-[1.5px] w-[19px]",
              "rounded-full bg-white",
              "transition-all duration-200",
              open
                ? "translate-y-[4px] rotate-45"
                : "",
            ].join(" ")}
          />

          <span
            className={[
              "absolute left-0 bottom-[4px]",
              "h-[1.5px] w-[19px]",
              "rounded-full bg-white",
              "transition-all duration-200",
              open
                ? "-translate-y-[3px] -rotate-45"
                : "",
            ].join(" ")}
          />
        </span>
      </button>

      {open && (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-label="Menüyü kapat"
            onClick={closeMenu}
            className="fixed inset-x-0 bottom-0 top-[var(--header-height)] z-40 bg-black/70 backdrop-blur-[2px]"
          />

          <div
            ref={menuRef}
            id="mobile-site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil site menüsü"
            className="mobile-nav-panel fixed left-3 right-3 top-[calc(var(--header-height)+10px)] z-50 overflow-hidden rounded-[22px] border border-[#2d2d2d] bg-[#0b0b0b] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.75)] sm:left-auto sm:right-5 sm:w-[320px]"
          >
            <div className="px-3 pb-2 pt-2">
              <p className="text-[8px] font-black tracking-[0.15em] text-[#62666b] uppercase">
                İZSER
              </p>

              <p className="mt-1 text-[12px] font-bold text-[#d5d7da]">
                Servis sektörünün
                dijital çalışma ağı
              </p>
            </div>

            <div className="my-2 h-px bg-[#242424]" />

            <nav
              className="flex flex-col"
              aria-label="Mobil navigasyon"
            >
              {siteNavigationItems.map(
                (
                  item,
                  index,
                ) => {
                  const isActive =
                    !item.href.startsWith(
                      "/#",
                    ) &&
                    pathname ===
                      item.href;

                  return (
                    <Link
                      key={
                        item.href
                      }
                      ref={
                        index === 0
                          ? firstLinkRef
                          : undefined
                      }
                      href={
                        item.href
                      }
                      onClick={
                        closeMenu
                      }
                      aria-current={
                        isActive
                          ? "page"
                          : undefined
                      }
                      className={[
                        "rounded-xl px-4 py-3.5",
                        "text-[13px] font-semibold",
                        "transition-colors",
                        isActive
                          ? "bg-[#1b1b1b] text-white"
                          : "text-[#b3b6ba] hover:bg-[#161616] hover:text-white",
                      ].join(" ")}
                    >
                      {
                        item.label
                      }
                    </Link>
                  );
                },
              )}
            </nav>

            <div className="my-2 h-px bg-[#242424]" />

            <Link
              href="/#mobil-uygulama"
              onClick={closeMenu}
              className="button-primary min-h-[46px] w-full rounded-xl px-4 text-[12px]"
            >
              Mobil Uygulamayı
              Keşfet
            </Link>

            <a
              href="mailto:info@izser.com"
              onClick={closeMenu}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-xl border border-[#2c2c2c] bg-[#101010] px-4 text-[11px] font-bold text-[#a9adb1] transition-colors hover:border-[#454545] hover:text-white"
            >
              info@izser.com
            </a>
          </div>
        </>
      )}
    </div>
  );
}