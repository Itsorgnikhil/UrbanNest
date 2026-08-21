# Step-by-Step Guide: How to Create the Query Form Workflow in N8N.io

This guide shows you how to build or import the **N8N.io Webhook Query Handler** workflow for the UrbanNest website query form.

---

## Method 1: Import Ready-to-Use Workflow (Fastest ⚡)

1. Open your **N8N dashboard** (e.g. `https://your-n8n-instance.cloud` or local `localhost:5678`).
2. Click **Workflows** in the left menu -> Click **New Workflow**.
3. In the top right corner, click the **Three Dots (⋮)** menu -> Select **Import from File**.
4. Choose the `n8n_query_form_workflow.json` file created in your project workspace.
5. Click **Activate** (toggle switch at top right from `Inactive` to `Active`).
6. Copy your **Production Webhook URL** from the Webhook node and paste it into your website!

---

## Method 2: Manual Node-by-Node Setup Guide

If you want to build the workflow manually from scratch in N8N:

### Step 1: Add the Webhook Node (Trigger)
1. In N8N canvas, click **+ Add first step**.
2. Search for **Webhook** and select it.
3. Configure the parameters:
   - **HTTP Method**: `POST`
   - **Path**: `urbannest-query-form`
   - **Response Mode**: Select `Using 'Respond to Webhook' Node`
4. Copy the generated **Webhook URL**:
   - Test URL: `https://<your-n8n-domain>/webhook-test/urbannest-query-form`
   - Production URL: `https://<your-n8n-domain>/webhook/urbannest-query-form`

---

### Step 2: Add Data Formatting Node (Optional/Set Node)
1. Drag a line from **Webhook Trigger** -> Add a **Edit Fields (Set)** node.
2. Select Mode: `JSON / Expression`.
3. Map customer incoming data:
   - `name` = `{{ $json.body.customer.name }}`
   - `email` = `{{ $json.body.customer.email }}`
   - `message` = `{{ $json.body.message }}`

---

### Step 3: Add Action Node (Store / Send Email / Alert)
Add your desired notification output:
- **Gmail / Email Node**: Send email notification to store owner `hello@urbanneststore.com`.
- **Google Sheets Node**: Append row to customer query log sheet.
- **Telegram / Slack Node**: Post message to store manager chat channel.

---

### Step 4: Add "Respond to Webhook" Node
1. Add a **Respond to Webhook** node.
2. Configure settings:
   - **Respond With**: `JSON`
   - **Response Body**:
     ```json
     {
       "status": "success",
       "message": "Query received and logged with UrbanNest team!"
     }
     ```
   - **Options -> Response Headers**:
     - `Access-Control-Allow-Origin`: `*`
     - `Access-Control-Allow-Headers`: `Content-Type`

---

### Step 5: Activate Workflow
Toggle the workflow switch at top right to **Active**.

---

## Webhook Payload Reference (Sent by Website)

When a customer submits a query on the UrbanNest website, your N8N Webhook receives this exact JSON body:

```json
{
  "timestamp": "2026-08-21T15:00:00.000Z",
  "store": "UrbanNest Lifestyle Store",
  "customer": {
    "name": "Ananya Sharma",
    "email": "ananya@example.com",
    "phone": "+91 98765 43210"
  },
  "queryCategory": "Product Inquiry",
  "message": "Is the French Lavender Candle in stock for in-store pickup today?",
  "source": "UrbanNest Website Form Integration"
}
```
