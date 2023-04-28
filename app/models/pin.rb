# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  uploader_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Pin < ApplicationRecord
    validate :ensure_image
    has_one_attached :image

    validates :title, presence: true

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :board_pin_relations,
        foreign_key: :pin_id,
        class_name: :BoardPin

    has_many :boards,
        through: :board_pin_relations,
        source: :board

    def ensure_image
      unless self.image.attached?
        errors[:image] << "must be attached"
      end
    end
    


    def self.generate_random_pins(num)
        pins = []
        # num.to_i.times do |i| 
        #     offsetnum = rand(Pin.count)
        #     pins.push(Pin.offset(offsetnum).first)
        # end
        while pins.length < num.to_i
            offsetnum = rand(Pin.count)
            pin = Pin.offset(offsetnum).first
            if !pins.include?(pin)
                pins.push(pin)
            end
        end
        return pins
    end

    

end
