class User < ApplicationRecord
  has_secure_password
  validates :email, :name, :password, allow_blank: false, 
  validates :email, :name, uniqueness: {case_sensitive: false}
  validates_format_of :email, with: /@/
  
end
