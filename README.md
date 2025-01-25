# Unhandled Errors and Resource Issues in Node.js HTTP Server

This repository demonstrates a simple Node.js HTTP server with several potential issues, including missing error handling, unexpected request handling, and potential resource exhaustion.  The `server.js` file contains the buggy code, while `serverSolution.js` provides a corrected version.

## Issues Addressed:

* **Missing Error Handling:** The original server lacks proper error handling, making it vulnerable to crashes and unexpected behavior.
* **Unexpected Request Handling:** The server doesn't handle unexpected request types or data gracefully.
* **Resource Exhaustion:** The server could potentially exhaust resources (memory, file handles) under heavy load if not properly managed.

## How to Reproduce:

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node server.js`.
4. Observe the lack of error handling and potential instability.
5. Then run `node serverSolution.js` to see the improved version.