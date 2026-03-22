import { products } from "@/app/data/products";

export async function GET() {
    try {
        return new Response(JSON.stringify(products), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        return new Response(JSON.stringify(body), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to create product' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
