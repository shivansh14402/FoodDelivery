# 🍔 Food Delivery System

A TypeScript-based **Food Delivery System** designed to demonstrate clean object-oriented design and practical application of the **Strategy Design Pattern**.

The project models a simplified food ordering workflow where users can browse restaurants, manage their cart, place orders, make payments, and get delivery assigned.

## 🚀 Features

* Restaurant and menu management
* Add/remove items from cart
* Support for multiple restaurants in a cart
* Automatic cart total calculation based on item quantity
* Order creation for individual restaurants
* Delivery agent assignment
* Order delivery management
* Multiple payment methods

  * UPI
  * Credit Card
  * PayPal
* Easily extensible payment system using the **Strategy Design Pattern**
* Payment method selection using a Factory with `Map`

## 🏗️ Architecture

The main components of the system are:

```text
RestaurantManager
       │
       ├── CartManager
       │      └── Cart Items
       │
       ├── PaymentManager
       │      └── PaymentFactory
       │             └── PaymentStrategy
       │                   ├── UPI
       │                   ├── Credit Card
       │                   └── PayPal
       │
       └── OrderManager
              │
              └── DeliveryManager
                     │
                     └── DeliveryAgent
```

## 🎯 Design Pattern

### Strategy Design Pattern

The payment system uses the **Strategy Pattern** to separate payment behavior from the main payment-processing logic.

Instead of using multiple `if/else` statements for different payment methods, each payment method implements a common strategy interface.

```text
PaymentStrategy
      │
      ├── UPI Payment Strategy
      ├── Credit Card Payment Strategy
      └── PayPal Payment Strategy
```

This makes it easier to introduce a new payment method without modifying the core payment-processing logic.

### Factory + Map

A `PaymentFactory` is used to select the appropriate payment strategy.

Payment strategies are mapped to their payment methods using a JavaScript `Map`, avoiding unnecessary conditional logic.

## 🧩 Main Concepts Practiced

* Object-Oriented Programming
* Strategy Design Pattern
* Factory Pattern
* Composition
* Encapsulation
* Separation of Responsibilities
* TypeScript Interfaces
* Collections using `Map`
* Basic domain modeling
* Extensible architecture

## 📌 Current Scope

This project intentionally keeps pricing and delivery simple:

* Flat delivery pricing
* Basic order processing
* Basic delivery-agent assignment
* Payment strategy abstraction

The architecture can be extended in the future to support features such as dynamic pricing, multiple delivery modes, payment retries, refunds, order tracking, and persistence.

## 🛠️ Tech Stack

* **TypeScript**
* **Node.js**
* Object-Oriented Design Patterns

## 🎓 Purpose

This project was built as a **System Design and Design Pattern practice project**, with a focus on understanding how Strategy Pattern can be applied to a real-world backend domain.

The goal is to keep the design simple while maintaining enough flexibility to add new payment methods and features without unnecessarily complicating the system.

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/c36e6687-07ae-45cb-97ed-e59f3c5c1d32" />
