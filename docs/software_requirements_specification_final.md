# Overview
This SRS document is for e-commerse website. It helps guide every involved participant like a roadmap. It outlines what the website needs to have to avoid scope creep and rework. To maintain a clear line in what to build and what to not this document work good using mentioned functional and non-functional requirement. On top of that, it’s used to communicate everything to other people who are going to be involved in the project. When everyone is on the same page, everything runs better.
# Software Requirements
Below are the requirement based on functional and non-functional category.
## Functional Requirements
### User Registration
| ID | Requirement |
| :-------------: | :----------: |
| FR1 |Users shall create accounts with a valid email address. |
| FR2 |The system shall verify the uniqueness of email addresses. |
| FR3 |Passwords must meet specified complexity requirements. |
| FR4 |User shall login as customer or seller. |
| FR5 |Users receive a confirmation email upon successful registration. |
| FR6 |Registered users shall log in securely. |

### Product Catalog
| ID | Requirement |
| :-------------: | :----------: |
| FR7 |The system shall display products with images, descriptions, and prices. |
| FR8 |Users shall filter products based on categories (e.g., electronics, clothing). |
| FR9 |Each product shall have an "Add to Cart" button for easy selection. |
| FR10 |Users shall view detailed product information by clicking on a product. |
| FR11 |The system shall support product search functionality. |

### Shopping Cart
| ID | Requirement |
| :-------------: | :----------: |
| FR12 |Users shall view and edit the items in their shopping cart. |
| FR13 |The system calculates and displays the total price in the shopping cart. |
| FR14 |Users shall easily remove items from the cart. |
| FR15 |Cart contents are saved for users with accounts even after logging out. |
| FR16 |Users shall proceed to checkout from the shopping cart. |

### Order Management
| ID | Requirement |
| :-------------: | :----------: |
| FR17 |Users receive an order confirmation message after completing a purchase. |
| FR18 |The system generates and displays a unique order number for each transaction. |
| FR19 |Users shall view their order history and track the status of their orders. |
| FR20 |Users shall initiate returns or exchanges for products. |
| FR21 |Users shall see how many products are in cart without going to cart directly. |

### Payment Integration
| ID | Requirement |
| :-------------: | :----------: |
| FR22 |User shall able to see total amount including all products and count. |
| FR23 |The payment gateway shall only contain product and total cost. |
| FR24 |The system supports one-click payments for registered users. |
| FR25 |Users receive a payment confirmation after a successful transaction. |
| FR26 |Failed transactions trigger appropriate error messages. |


## Non-Functional Requirements
### Performance
| ID | Requirement |
| :-------------: | :----------: |


### Performance
| ID | Requirement |
| :-------------: | :----------: |

# Change management plan
<Description of what this section is>


# Traceability links
<Description of this section>
## Use Case Diagram Traceability
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| UseCase1 | Move Player | FR5 |
| … | … | … |
## Class Diagram Traceability
| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| classPlayer | NFR3, FR5 |
| … | … | … |
## Activity Diagram Traceability
<In this case, it makes more sense (I think, feel free to disagree) to link
to the file and to those requirements impacted>
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| <filename> | Handle Player Input | FR1-5, NFR2 |
| … | … | … |
# Software Artifacts
<Describe the purpose of this section