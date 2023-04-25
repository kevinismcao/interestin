# == Schema Information
#
# Table name: board_pins
#
#  id         :bigint           not null, primary key
#  pin_id     :bigint           not null
#  board_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class BoardPin < ApplicationRecord

    validates :pin_id, :board_id, presence: true
    validates :pin_id, uniqueness: { scope: :board_id }

    belongs_to :pin,
        foreign_key: :pin_id,
        class_name: :Pin
    
    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board
    
    

end
