## Description of the problem:

This application serves an API about questions and answers.

A Question can have one or more answers, and can be marked as private. Every Answer belongs to only one question. Both questions and answers contain just a short text.

Each Question has an asker (a user), and each Answer has a provider (another user). The only attribute needed for users is a full name.

A Tenant is a consumer of the API you are going to write. Like users, the only attribute needed for tenants is a name. 
****
## You need to accomplish the following tasks:

- [ ] Add a RESTful, read-only API to allow consumers to retrieve Questions with Answers as JSON (no need to retrieve Answers on their own). The response should include Answers inside their Question as well as include the id and name of the Question and Answer users.
- [ ] Don't return private Questions in the API response.
- [ ] Require every API request to include a valid Tenant API key, and return an HTTP code of your choice if the request does not include a valid key.
- [ ] Track API request counts per Tenant.
- [ ] Add an HTML dashboard page as the root URL that shows the total number of Users, Questions, and Answers in the system, as well as Tenant API request counts for all Tenants.  Style it enough to not assault a viewer's sensibilities.
- [ ] Add tests around the code you write as you deem appropriate. Assume that the API cannot be changed once it's released and test accordingly.
- [ ] No need to add a CRUD interface for managing questions and answers, just create a seed file that populates the DB with sample data for all models.
- [ ] Allow adding a query parameter to the API request to select only Questions that contain the query term(s).  Return an appropriate HTTP status code if no results are found.
- [ ] Add a piece of middleware to throttle API requests on a per-Tenant basis. After the first 100 requests per day, throttle to 1 request per 10 seconds.
- [ ] Deploy application to Heroku and update README file with its URL.
- [ ] Any extra model, feature, design consideration, lib or tool will be taken into account.
