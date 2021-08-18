# PollingSimulator

## Poll Simulator Exercise:

Suppose there is election for Present, SBG (Student Body Governance) at your institute. Let following be in the scope of this work: • There are number of student candidates nominates themselves for fighting election for the position of Present, SBG. • Students are voters; each student votes for the post. • Let the system record IDs of all students who vote so that we can detect repeat voting by same student; however we do not record who votes whom. • We do not use any database for recording proceedings of polling; let us use some in memory data objects for storing the same. • Let web browser be only client for accessing the application. • We would want to allow polling to be performed from multiple web clients (i.e. browsers from different machines)

## Created a Project using HTML JS and NodeJS+Express RESTful server

The idea behind the solution is that of using a RESTful Server that stores the data in an array of objects or other built-in data structures and multiple web clients can interact with this data without relying on a database or a storage system other than the server memory itself.
Main.js calls all the apis for storing and retrieving data stored in backend also contains logic of the application.
Index.js files contains all the apis which adds and removes data.
All html files contains forms for all the functionalities.
