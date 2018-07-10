class User < ApplicationRecord
  has_secure_password
  validates :email, :name, :password, presence: true, allow_blank: false
  validates :email, uniqueness: {case_sensitive: false}
  validates_format_of :email, with: /@/

  def self.from_token_payload(payload)
    self.find payload["sub"]
  end

  def to_token_payload
        {
            sub: id,
            email: email
        }
    end
  
end
