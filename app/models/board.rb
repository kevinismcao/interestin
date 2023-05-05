# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  owner_id    :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Board < ApplicationRecord
    validates :name, :owner_id, presence: true
    validates :name, uniqueness: { scope: :owner_id }

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :board_pin_relations,
        foreign_key: :board_id,
        class_name: :BoardPin,
        dependent: :destroy,
        inverse_of: :Board
    
    has_many :pins,
        through: :board_pin_relations,
        source: :pin
    
    def remove_pin(pin)
        board_pin_relations.find_by(pin_id: pin.id).destroy
    end

    def self.saved_pins(board_id)
        Pin.select("pins.id, pins.title, pins.description, pins.created_at, pins.uploader_id")
            .joins(:board_pin_relations)
            .order("pins.created_at DESC") 
            .where("board_pins.board_id = (?)", board_id)
    end   


end
