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
        dependent: :destroy
    
    has_many :pins,
        through: :board_pin_relations,
        source: :pin
    
    



end
