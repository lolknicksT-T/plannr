# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
jason = User.create(username: "jason", password: "jason")
plan1 = Plan.create(title: "ONE")
plan2 = Plan.create(title: "TWO")
userplan1 = UserPlan.create(user_id: jason.id, plan_id: plan1.id)
userplan2 = UserPlan.create(user_id: jason.id, plan_id: plan2.id)
convo1 = Conversation.create(title: plan1.title, plan_id: plan1.id)
convo2 = Conversation.create(title: plan2.title, plan_id: plan2.id)
