class User < ApplicationRecord
  has_secure_password
  validates :email, :name, :password, presence: true, allow_blank: false
  validates :email, :name, uniqueness: {case_sensitive: false}
  validates_format_of :email, with: /@/

  def to_token_payload
        {
            sub: id,
            email: email
        }
    end
  
end
