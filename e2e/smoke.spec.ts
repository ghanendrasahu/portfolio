import { expect, test } from "@playwright/test";

const routes = ["/", "/experience", "/projects", "/skills", "/github", "/education"];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "GitHub", path: "/github" },
  { name: "Education", path: "/education" },
];

test.describe("portfolio smoke", () => {
  for (const route of routes) {
    test(`"${route}" renders with zero console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      page.on("pageerror", (err) => errors.push(String(err)));

      await page.goto(route);
      await expect(page).toHaveTitle(/Ghanendra Sahu/);
      await expect(page.locator("main")).toBeVisible();
      expect(errors, `console errors on ${route}`).toEqual([]);
    });
  }

  test("header navigation reaches every page", async ({ page }) => {
    for (const link of navLinks) {
      await page.goto("/");
      await page.getByRole("link", { name: link.name }).first().click();
      await expect(page).toHaveURL(new RegExp(`${link.path}$`));
    }
  });

  test("projects page renders every card with a GitHub link", async ({ page }) => {
    await page.goto("/projects");
    const cards = page.locator("article");
    await expect(cards.first()).toBeVisible();

    const total = await cards.count();
    expect(total).toBeGreaterThanOrEqual(20);

    const githubLinks = cards.locator('a[href^="https://github.com/"]');
    expect(await githubLinks.count()).toBe(total);
  });

  test("home shows headline, CTAs and resume link", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: /Data Scientist/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /Get in Touch/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /GitHub/ }).first()).toBeVisible();

    const resume = page.getByRole("main").getByRole("link", { name: /Resume/ });
    await expect(resume).toBeVisible();
    await expect(resume).toHaveAttribute("target", "_blank");
    await expect(resume).toHaveAttribute("href", /\.pdf$/);
  });

  test("footer renders and links are reachable", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    const footerLinks = footer.locator("a[href]");
    expect(await footerLinks.count()).toBeGreaterThan(0);
  });
});
