    -- Add image_scale column to products table
    ALTER TABLE products ADD COLUMN image_scale DECIMAL(3,2) DEFAULT 1.0 COMMENT 'Scale factor for product images (e.g., 1.2 for 20% larger, 0.9 for 10% smaller)';
