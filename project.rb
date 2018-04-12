
//// Migrations ////

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
show = plans/:plan_id
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
