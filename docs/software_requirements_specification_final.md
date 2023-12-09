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
| NFR1 |The website shall load quickly for all users. |
| NFR2 |The system shall handle concurrent user loads. |
| NFR3 |Database queries shall be optimized for fast retrieval of product information and order processing. |
| NFR4 |Images shall compress with high quality to reduce page load times. |
| NFR5 |The website shall be responsive and accessible on various browsers. |


### Security
| ID | Requirement |
| :-------------: | :----------: |
| NFR6 |User passwords shall securely store. |
| NFR7 |Users shall be authorized to access features and data based on their assigned roles and permissions. |
| NFR8 |User shall be authenticated based upon token to mitigate the risk of unauthorized access through the use of stale tokens. |
| NFR9 |Product images uploads shall be conducted over a secure transport layer to encrypt data in transit. |
| NFR10 |Regular security audits and vulnerability assessments shall be conducted. |

### Scalability
| ID | Requirement |
| :-------------: | :----------: |
| NFR11 |The system architecture shall be scalable to accommodate future growth. |
| NFR12 |The website shall handle a 20% increase in traffic during peak times. |
| NFR13 |Load balancing shall be implemented to distribute traffic evenly. |
| NFR14 |The database shall be scalable to store a growing number of products and users. |
| NFR15 |The system shall support easy integration with additional third-party services. |

### Reliability
| ID | Requirement |
| :-------------: | :----------: |
| NFR16 |The website shall have 99.9% uptime. |
| NFR17 |Automated backups of the database shall be performed daily. |
| NFR18 |In case of server failure, the system shall have a failover mechanism. |
| NFR19 |Users shall experience minimal disruptions during routine maintenance. |
| NFR20 |User Session need to be maintained even after the closing the browser. |

### Usability
| ID | Requirement |
| :-------------: | :----------: |
| NFR21 |The website shall be designed with a user-friendly interface. |
| NFR22 |Navigation shall intuitive such product, checkout, order history pages. |
| NFR23 |Product pages shall have high-quality images and informative descriptions. |
| NFR24 |The checkout process shall be streamlined with minimal steps. |
| NFR25 |The website shall be compatible with major web browsers. |
| NFR26 |Users shall be able to find the products based on the listed categories. |
| NFR27 |Customers shall be able to see the newly added products on the home page. |


# Change management plan
A thorough Change Management Plan for integrating E-Commerce application into a customer's business environment is described in this document. To guarantee a seamless and effective implementation, it covers important areas such training, integration with current systems, and problem solving.
The attached excel sheet is to follow the process while raising change request.
    ![Alt text](ChangeRequestForm-1.png)

##### Target Audience:

All employees involved in the e-commerce operations, including:
Customer service representatives
Inventory managers
Marketing and sales teams
Warehouse personnel
Order fulfillment specialists
IT personnel responsible for system integration.
Managers and stakeholders involved in the implementation process.

### Change Management Strategy:

##### Planning and Communication:

•	Start with the town hall to let all employees know about the new system.
•	Managers must involve the employees and follow the process.
•	Clearly define new system and its purpose with communication plan that outlines key messages, timelines, and communication channels for informing stakeholders.
•	Develop accurate to the point training materials specific to user roles and responsibilities.
•	Keep track of process while handover and shadow on share point based on key points for new system - performance, user requirement satisfaction and maintenance.

##### Training and Shadow Knowledge Transfer:
•	Define and configure the application according to the integration plan.
•	Conduct interactive training sessions for users based on their roles and responsibilities.
•	Motivate the employees to demonstrate how this system is better.
•	Provide users with support via a variety of channels, including FAQs, technical support, and documentation.
•	Make smooth handover of system and offer Shadow Knowledge Transfer.
•	Utilize Shadow Knowledge Transfer phase to monitor system and assist client for hands-on activity of system.


##### Evaluation Metrics:
•	Establish central method to monitor system based on budget, cost reductions, time efficiency, etc.
•	Involve higher management to show progress and advantages of new system also to prioritize issues based on severity and impact on business operations keep process transparent.
•	Define a clear escalation process for complex issues requiring technical expertise.
•	Capture high user adoption rate, driven by reduced process times, increased productivity, decreased support tickets, and positive user feedback, demonstrably validates the success of the implemented change.


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