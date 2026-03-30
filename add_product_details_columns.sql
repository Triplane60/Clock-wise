ALTER TABLE products ADD COLUMN brand VARCHAR(100) DEFAULT 'Unknown' COMMENT 'Brand name of the product (e.g., Rolex, Patek Philippe, Breitling)';

ALTER TABLE products ADD COLUMN stock_quantity INT DEFAULT 10 COMMENT 'Available stock quantity for the product';

ALTER TABLE products ADD COLUMN image_2 VARCHAR(500) NULL COMMENT 'Second product image for slider/gallery';

ALTER TABLE products ADD COLUMN image_3 VARCHAR(500) NULL COMMENT 'Third product image for slider/gallery';
