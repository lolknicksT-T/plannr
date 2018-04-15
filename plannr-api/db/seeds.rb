# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
jason = User.create(username: "jason", password: "jason")
josh = User.create(username: "josh", password: "josh")
plan1 = Plan.create(title: "Get Coffee", description: 'not flatiron trash coffee', location: "la colombe", date_time: "17 Apr 2018 12:00PM -0400", admin_id: jason.id )
plan2 = Plan.create(title: "Chipotle/El Toro for lunch?", description: "I like chipototle", location: "chipotle", date_time: "17 Apr 2018 1:00PM -0400", admin_id: jason.id)
plan3 = Plan.create(title: "Picnic at Prospect Park", description: "should be dope", location: "prospect park", date_time: "11 May 2018 12:00PM -0400", admin_id: josh.id)
userplan1 = UserPlan.create(user_id: jason.id, plan_id: plan1.id)
userplan2 = UserPlan.create(user_id: jason.id, plan_id: plan2.id)
userplan3 = UserPlan.create(user_id: josh.id, plan_id: plan3.id)
convo1 = Conversation.create(title: plan1.title, plan_id: plan1.id)
convo2 = Conversation.create(title: plan2.title, plan_id: plan2.id)
convo3 = Conversation.create(title: plan3.title, plan_id: plan3.id)
