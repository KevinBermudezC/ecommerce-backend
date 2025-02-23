import { db } from '../utils/db.js';

export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, stock, image, category_id } = req.body;

    // Validaciones básicas
    if (!name || !price || !stock || !category_id) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields (name, price, stock, category_id)." 
      });
    }

    // Asegurar que price y stock sean valores numéricos válidos
    const parsedPrice = parseFloat(price);
    const parsedStock = parseInt(stock);

    if (isNaN(parsedPrice) || isNaN(parsedStock)) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid price or stock value. They must be numbers." 
      });
    }

    // Verificar que la categoría exista antes de asociarla
    const existingCategory = await db.category.findUnique({
      where: { id: parseInt(category_id) }
    });

    if (!existingCategory) {
      return res.status(404).json({ 
        success: false, 
        message: "Category not found." 
      });
    }

    // Crear el producto en la base de datos
    const product = await db.product.create({
      data: {
        name,
        description: description || "", // Permitir que sea opcional
        price: parsedPrice,
        stock: parsedStock,
        image: image || "https://example.com/default-product.jpg", // Imagen por defecto si no se proporciona
        category: {
          connect: { id: parseInt(category_id) }
        }
      }
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product
    });

  } catch (error) {
    console.error("Error creating product:", error);
    next(error);
  }
};
