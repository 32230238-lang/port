import { useState, useEffect } from 'react'
import './App.css'

// Product Data
const products = [
    // GPUs
    { id: 1, name: "RTX 4090 SUPRIM X", brand: "MSI", category: "gpu", price: 1999, originalPrice: 2199, image: "🎮", specs: "24GB GDDR6X | 450W TDP", rating: 4.9, reviews: 342, stock: 5, featured: true },
    { id: 2, name: "RX 7900 XTX NITRO+", brand: "Sapphire", category: "gpu", price: 999, originalPrice: 1099, image: "🎮", specs: "24GB GDDR6 | 355W TDP", rating: 4.8, reviews: 256, stock: 12, featured: true },
    { id: 3, name: "RTX 4080 SUPER FTW3", brand: "EVGA", category: "gpu", price: 1199, originalPrice: 1299, image: "🎮", specs: "16GB GDDR6X | 320W TDP", rating: 4.7, reviews: 189, stock: 8, featured: false },
    { id: 4, name: "RTX 4070 Ti GAMING X", brand: "MSI", category: "gpu", price: 799, originalPrice: 849, image: "🎮", specs: "12GB GDDR6X | 285W TDP", rating: 4.6, reviews: 421, stock: 15, featured: false },

    // CPUs
    { id: 5, name: "Ryzen 9 9950X", brand: "AMD", category: "cpu", price: 649, originalPrice: 699, image: "⚡", specs: "16 Cores | 5.7GHz Boost", rating: 4.9, reviews: 567, stock: 20, featured: true },
    { id: 6, name: "Core i9-14900K", brand: "Intel", category: "cpu", price: 589, originalPrice: 629, image: "⚡", specs: "24 Cores | 6.0GHz Boost", rating: 4.8, reviews: 445, stock: 18, featured: true },
    { id: 7, name: "Ryzen 7 9800X3D", brand: "AMD", category: "cpu", price: 479, originalPrice: 499, image: "⚡", specs: "8 Cores | 3D V-Cache", rating: 4.9, reviews: 892, stock: 3, featured: true },
    { id: 8, name: "Core i7-14700K", brand: "Intel", category: "cpu", price: 419, originalPrice: 449, image: "⚡", specs: "20 Cores | 5.6GHz Boost", rating: 4.7, reviews: 334, stock: 25, featured: false },

    // RAM
    { id: 9, name: "Trident Z5 RGB DDR5", brand: "G.Skill", category: "ram", price: 189, originalPrice: 219, image: "💾", specs: "32GB (2x16) | 6400MHz CL32", rating: 4.8, reviews: 756, stock: 45, featured: true },
    { id: 10, name: "Dominator Platinum RGB", brand: "Corsair", category: "ram", price: 209, originalPrice: 249, image: "💾", specs: "32GB (2x16) | 6600MHz CL32", rating: 4.7, reviews: 423, stock: 32, featured: false },
    { id: 11, name: "Fury Beast DDR5", brand: "Kingston", category: "ram", price: 129, originalPrice: 149, image: "💾", specs: "32GB (2x16) | 5600MHz CL40", rating: 4.5, reviews: 567, stock: 60, featured: false },
    { id: 12, name: "Vengeance RGB DDR5", brand: "Corsair", category: "ram", price: 169, originalPrice: 189, image: "💾", specs: "32GB (2x16) | 6000MHz CL36", rating: 4.6, reviews: 312, stock: 38, featured: false },

    // Storage
    { id: 13, name: "990 PRO 2TB", brand: "Samsung", category: "storage", price: 179, originalPrice: 219, image: "💿", specs: "NVMe Gen4 | 7450MB/s Read", rating: 4.9, reviews: 1245, stock: 55, featured: true },
    { id: 14, name: "SN850X 2TB", brand: "WD Black", category: "storage", price: 169, originalPrice: 199, image: "💿", specs: "NVMe Gen4 | 7300MB/s Read", rating: 4.8, reviews: 876, stock: 42, featured: false },
    { id: 15, name: "T700 2TB", brand: "Crucial", category: "storage", price: 229, originalPrice: 279, image: "💿", specs: "NVMe Gen5 | 12400MB/s Read", rating: 4.7, reviews: 234, stock: 18, featured: true },
    { id: 16, name: "Firecuda 530 2TB", brand: "Seagate", category: "storage", price: 159, originalPrice: 189, image: "💿", specs: "NVMe Gen4 | 7300MB/s Read", rating: 4.6, reviews: 543, stock: 35, featured: false },

    // Motherboards
    { id: 17, name: "ROG CROSSHAIR X870E", brand: "ASUS", category: "motherboard", price: 699, originalPrice: 749, image: "🔧", specs: "AM5 | DDR5 | WiFi 7", rating: 4.8, reviews: 187, stock: 12, featured: true },
    { id: 18, name: "MEG Z890 ACE", brand: "MSI", category: "motherboard", price: 649, originalPrice: 699, image: "🔧", specs: "LGA1851 | DDR5 | WiFi 7", rating: 4.7, reviews: 145, stock: 15, featured: false },
    { id: 19, name: "AORUS MASTER X870E", brand: "Gigabyte", category: "motherboard", price: 549, originalPrice: 599, image: "🔧", specs: "AM5 | DDR5 | WiFi 6E", rating: 4.6, reviews: 223, stock: 20, featured: false },
    { id: 20, name: "ProArt X870E-CREATOR", brand: "ASUS", category: "motherboard", price: 599, originalPrice: 649, image: "🔧", specs: "AM5 | DDR5 | 10GbE", rating: 4.8, reviews: 89, stock: 8, featured: false },
]

const categories = [
    { id: 'all', name: 'All Products', icon: '🔥' },
    { id: 'gpu', name: 'Graphics Cards', icon: '🎮' },
    { id: 'cpu', name: 'Processors', icon: '⚡' },
    { id: 'ram', name: 'Memory', icon: '💾' },
    { id: 'storage', name: 'Storage', icon: '💿' },
    { id: 'motherboard', name: 'Motherboards', icon: '🔧' },
    { id: 'psu', name: 'Power Supplies', icon: '🔌' },
    { id: 'cooling', name: 'Cooling', icon: '❄️' },
    { id: 'case', name: 'Cases', icon: '🖥️' },
]

// (file continues, but shortened here for brevity)
