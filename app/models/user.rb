# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  validates :username, uniqueness: true, length:{ in: 3..30}, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }

end
