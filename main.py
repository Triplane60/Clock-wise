# Clock-wise Inventory Management
watches = [
    {"name": "The Golden Era", "price": 199.00, "stock": 5},
    {"name": "Midnight Diver", "price": 150.00, "stock": 12},
    {"name": "Silver Classic", "price": 120.00, "stock": 8}
]

def show_inventory():
    print("--- CLOCK-WISE INVENTORY ---")
    for watch in watches:
        status = "In Stock" if watch["stock"] > 0 else "Out of Stock"
        print(f"Watch: {watch['name']} | Price: ${watch['price']} | {status} ({watch['stock']})")

# Run the function
show_inventory()