# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  description  :string           not null
#  commentor_id :bigint           not null
#  pin_id       :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord
    validates :description, :commentor_id, :pin_id, presence: true

    belongs_to :commentor,
        foreign_key: :commentor_id,
        class_name: :User
    
    belongs_to :pin
    

end
