import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

/**
 * Last-resort boundary: a render error in any page shows a recoverable
 * message instead of a blank screen.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Unhandled UI error", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "var(--color-bg)",
          color: "var(--color-tprimary)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <div
          style={{
            maxWidth: "34rem",
            border: "1px solid var(--color-border)",
            borderRadius: "16px",
            background: "var(--color-surface)",
            padding: "2rem",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Something went wrong</h1>
          <p style={{ color: "var(--color-tsecondary)", lineHeight: 1.6 }}>
            This page hit an unexpected error. Reloading usually fixes it.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button type="button" onClick={() => window.location.reload()}>
              Reload page
            </button>
            <a href="/" style={{ color: "var(--color-accent)" }}>
              Back to home
            </a>
          </div>
        </div>
      </main>
    );
  }
}
