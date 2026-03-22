import { products } from "@/app/data/products";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const product = products.find((p) => p.id === parseInt(id));
        if (!product) {
            return Response.json({ message: 'Product not found' }, { status: 404 });
        }
        return Response.json(product);
    } catch (error) {
        return Response.json({ error: 'Failed to fetch product' }, { status: 500 });
    }
}