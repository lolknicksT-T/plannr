# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_04_13_033350) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.string "title"
    t.bigint "plan_id"
    t.index ["plan_id"], name: "index_conversations_on_plan_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "content"
    t.bigint "conversation_id"
    t.index ["conversation_id"], name: "index_messages_on_conversation_id"
  end

  create_table "plans", force: :cascade do |t|
    t.string "title"
    t.string "description"
  end

  create_table "user_plans", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "plan_id"
    t.integer "admin_id"
    t.index ["plan_id"], name: "index_user_plans_on_plan_id"
    t.index ["user_id"], name: "index_user_plans_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
  end

  add_foreign_key "conversations", "plans"
  add_foreign_key "messages", "conversations"
  add_foreign_key "user_plans", "plans"
  add_foreign_key "user_plans", "users"
end
