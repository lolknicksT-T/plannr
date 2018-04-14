
//// Migrations ////

rails generate migration AddPartNumberToProducts part_number:string

User
t.string username
t.string password_digest

Plan
t.string title

Conversation
t.string title
t.references plan

Message
t.string text
t.references conversation

-------------------------------------------

//// Models ////

User has_many plans
User has_many conversations through plans
User has_many messages through conversations
Plan has_many users
Plan has_one conversation
Plan has_many messages through conversation
Conversation belongs_to plan
Conversation has_many messages
Message belongs_to conversation

-------------------------------------------

//// Controllers ////

SessionsController
create
destroy

UsersController
create
# destroy

PlansController
index = users/:user_id/plans
show = users/:user_id/plans/:plan_id
create
update
# destroy
pastPlans

ConversationsController
show
create

MessagesController
index = conversations/:conversation_id/messages
create

-------------------------------------------

//// Channel ////
Plan has subscribers

-------------------------------------------

//// Routes ////

/login
/register
root
/past_plans

-------------------------------------------

if user_plan exists, admin: false

login POST to sessions create
register POST to users create

-------------------------------------------
click button to create a new plan
fetch POST to `http://localhost:3000/api/v1/user/${parseInt(localStorage.user)}/plans`
