# Problem 1

# x = 1
# 100.times do
#   puts x
#   x += 1
# end

# Problem 2

# x = 1
# 50.times do
#   puts x
#   x += 2
# end

# Problem 3

# array = [11, 22, 33, 44, 55, 55, 55]
# puts array.select{ |x| x == 55 }.length

# Problem 4

# strings = ["a", "b", "c", "d", "e"]
# awesome = strings.flat_map { |x| [x, "awesomesauce"] }
# awesome.delete_at(-1)
# p awesome

# Problem 5

item_amounts = {chair: 5, table: 2}
item_amounts[:chair] -= 2
p item_amounts