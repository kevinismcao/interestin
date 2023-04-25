# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_24_205248) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_pins", force: :cascade do |t|
    t.bigint "pin_id", null: false
    t.bigint "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_board_pins_on_board_id"
    t.index ["pin_id", "board_id"], name: "index_board_pins_on_pin_id_and_board_id", unique: true
    t.index ["pin_id"], name: "index_board_pins_on_pin_id"
  end

  create_table "boards", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.bigint "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "owner_id"], name: "index_boards_on_name_and_owner_id", unique: true
    t.index ["owner_id"], name: "index_boards_on_owner_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "description", null: false
    t.bigint "commentor_id", null: false
    t.bigint "pin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["commentor_id"], name: "index_comments_on_commentor_id"
    t.index ["pin_id"], name: "index_comments_on_pin_id"
  end

  create_table "follows", force: :cascade do |t|
    t.bigint "follower_id", null: false
    t.bigint "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_follows_on_board_id"
    t.index ["follower_id", "board_id"], name: "index_follows_on_follower_id_and_board_id", unique: true
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "pins", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.bigint "uploader_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uploader_id"], name: "index_pins_on_uploader_id"
  end

  create_table "pins_users", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "pin_id", null: false
    t.boolean "saved_pin", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pin_id"], name: "index_pins_users_on_pin_id"
    t.index ["user_id", "pin_id"], name: "index_pins_users_on_user_id_and_pin_id", unique: true
    t.index ["user_id"], name: "index_pins_users_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "category"
    t.bigint "pin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pin_id"], name: "index_tags_on_pin_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "board_pins", "boards"
  add_foreign_key "board_pins", "pins"
  add_foreign_key "boards", "users", column: "owner_id"
  add_foreign_key "comments", "pins"
  add_foreign_key "comments", "users", column: "commentor_id"
  add_foreign_key "follows", "boards"
  add_foreign_key "follows", "users", column: "follower_id"
  add_foreign_key "pins", "users", column: "uploader_id"
  add_foreign_key "pins_users", "pins"
  add_foreign_key "pins_users", "users"
  add_foreign_key "tags", "pins"
end
