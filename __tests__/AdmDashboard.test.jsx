import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdmDashboard from "../src/pages/AdmDashboard";

vi.mock("react-router-dom", () => ({
    useLoaderData: vi.fn(() => ({
        products: [
            {
                id: 1,
                title: 'Temari',
                description: 'The fabrics is light and pleasant to wear in summer. The pattern represents temari balls, which are traditional Japanese decorative balls. When offered at New Year, they are considered as lucky charms.',
                category: "Kimono",
                price: 180,
                material: "Cotton",
                season: "Summer",
                pattern: "Daily life",
                img: "https://cdn.shopify.com/s/files/1/0266/2403/2817/products/womens-japanese-temari-kimono-one-size-739_2000x.jpg?v=1619718576"
            },

            {
                id: 2,
                title: "Hanafubuki",
                price: 175,
                description: "This traditional kimono for women will enhance your feminine side and enhance your natural elegance. The white cherry blossoms contrast nicely with the beautiful blue fabric.",
                category: "Kimono",
                material: "Cotton",
                season: "Spring",
                pattern: "Cherry-blossoms",
                img: "https://cdn.shopify.com/s/files/1/0266/2403/2817/products/traditional-kimonos-for-women-hanafubuki-826_2000x.jpg?v=1619718567"
            },
        ]
    })),
    Link: vi.fn()
}))

beforeEach(() => {
    render(<AdmDashboard />)
})

describe("AdmDashboard rendering", () => {
    test("should render search bar", () => {
        screen.debug();
        const searchElement = screen.getByText(/search/i);
        expect(searchElement).toBeInTheDocument();
    })

    test("should render delete button", () => {
        const deleteButtonElements = screen.getAllByRole("button", { name: /delete/i });
        expect(deleteButtonElements[0]).toBeInTheDocument();
    })

    test("should render title of second product", () => {
        const productTwoElement = screen.getByText(/Hanafubuki/);
        expect(productTwoElement).toBeInTheDocument();
    })

    test("should render title of first product", () => {
        const productOneElement = screen.getByText(/Temari/);
        expect(productOneElement).toBeInTheDocument();
    })
})

describe("Dashboard behavior", () => {
    test("should filter by name", () => {
        const searchEl = screen.getByText(/search/i);
        searchEl.value = '175';
        fireEvent.change(searchEl);

        const filteredProduct = screen.getByText(/Hanafubuki/);
        expect(filteredProduct).toBeInTheDocument();
        expect(screen.queryByText('Temari')).not.toBeInTheDocument();
    })
})