class User < ApplicationRecord
    enum role: { student: 0, instructor: 1 }
end
