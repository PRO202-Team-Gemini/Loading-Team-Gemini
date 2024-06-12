
# Project-Loading

#### By Team Gemini

---


> [!IMPORTANT]
> To run this project locally on your computer, you'll need to follow these steps:

First, start with opening the integrated terminal in **"LoadingReact"** folder.

<img width="331" alt="terminal" src="https://github.com/PRO202-Team-Gemini/LoadingV2/assets/114475257/cb04fa10-1727-4278-bf74-2aad349a3dca">


Then, you'll need to install npm (Node Package Manager).

Run:
```sh
npm install
```
then run:
```sh
npm run dev
```

To start the connection to the database, you'll need to open the integrated terminal in **"LoadingAPI"**

Run:
```sh
dotnet watch
```

This will migrate the database to the prosject and open Swagger in your browser.
Swagger displays the API's endpoints. You don't have to do anything on that page.

The project is now running locally on your computer.

---
> [!IMPORTANT]
> To populate the database with data, see below

To setup questions, answers and characters for the play, 3 excel files has been created which will connect to the database during runtime. 
These files can be located at LoadingV2/LoadingAPI/Admin/Datafiles.

When the server starts, all previous data from the mentioned databases will be removed and replaced with the data in the corresponding excel file, allowing for easy changes and backup.

OBS!
Do NOT change the header (first row) in excel as this corresponds to the database columns.
ALWAYS close the excel sheets before running the server, also note that changes made while the server is running will not be implemented, only when the server restarts.

