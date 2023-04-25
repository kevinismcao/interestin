# == Schema Information
#
# Table name: pins_users
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  pin_id     :bigint           not null
#  saved_pin  :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PinsUser < ApplicationRecord
    validates :user_id, :pin_id, presence: true
    validates :user_id, uniqueness: { scope: :pin_id}

    belongs_to :user
    belongs_to :pin


end
