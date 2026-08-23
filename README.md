MS Forms Renderer for Power Apps (PCF Control)
An enterprise-grade Power Apps Component Framework (PCF) code component designed to seamlessly embed and render Microsoft Forms directly within Power Canvas and Model-Driven Apps.

Background & Problem Statement
As of today, Microsoft Power Apps lacks a native, out-of-the-box control or seamless mechanism to embed and render Microsoft Forms directly within a screen. Canvas Apps rely on workaround methods—such as using the Link control or a Button with OnSelect = Launch(...)—which force users into an outside browser window to complete the form. This breaks the seamless app experience, loses user context, requires switching back and forth between applications, and leads to poor mobile user flow.

This PCF control provides a clean, native, and robust solution to that limitation, enabling seamless in-app MS Forms integration within any Power Apps interface without relying on external redirects or browser popups.

Key Features
Direct MS Forms Embedding: Render any Microsoft Form (Internal, External, or Group Forms) directly within Canvas and Model-Driven App screens without opening an external browser.

Responsive Layout: Automatically scales and adjusts layout dimensions based on the parent container's width and height.

Auto-Submit & Dynamic Parameters: Easily pass context, predefined values, or query string parameters directly into form fields using dynamic bindings.

On-Form-Submit Events: Detect form completion state within Power Apps to trigger downstream Canvas workflows, Navigate screens, or refresh Dataverse collections.

Clean & Modern UI: Eliminates standard iframe scrollbar issues, border clipping, and cross-site scripting blocking.

Technical Architecture
Framework: Power Apps Component Framework (PCF)

Type: Field / Control Component

Dependencies: React, Fluent UI, TypeScript

Prerequisites
Before building or deploying this control, ensure you have the following installed:

Node.js (LTS Version)

Power Platform CLI (PAC)

Power Apps environment with System Customizer or System Administrator privileges.

Installation & Deployment
1. Build the Solution Package
Clone the repository and run the following terminal commands to install dependencies and compile the solution package:

Bash
# Install npm packages
npm install

# Build the component
npm run build

# (Optional) Test locally using the PCF harness
npm start
2. Push to Environment
Deploy directly to your connected Power Apps environment:

Bash
# Authenticate to your Microsoft Dataverse environment
pac auth create --url https://your-environment-name.crm.dynamics.com

# Push the solution directly to your environment
pac pcf push --publisher-prefix custom
Property Bindings
Configure the following properties in the Power Apps Studio control pane:

Property	Type	Description	Required
FormURL	SingleLine.Text	The full shareable view/response URL of the Microsoft Form.	Yes
Width	Integer	Explicit width of the rendered container (defaults to 100%).	No
Height	Integer	Explicit height of the rendered container (defaults to 100%).	No
PassContext	TwoOptions	Pass logged-in Power Apps user context parameters to the form URL.	No
Usage Guide
Canvas Apps Implementation
Open Power Apps Studio.

Go to Insert > Get more components > Code tab.

Select MS Forms Renderer and click Import.

Drag the control onto your screen or inside a Container.

Set the FormURL property to your targeted MS Form URL:

Code snippet
"https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID_HERE"
Next steps for your PCF control repository:

Add an OnSubmit event listener guide to the README

Create a GitHub Actions CI/CD workflow file
