# Update, Delete and Drop in MongoDB

* Go back to your classroom database. You've decided to take on a new hobby, extreme basket weaving. While practicing for your Extreme Basket Weaving Competition, you broke the computer of the person next to you. They're now using a new operating system now. Another student in your row saw you break that computer and wisely decided to move. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn’t leave with candy. All this work made you hungry, so you bought yourself some candy. 
  
## Instructions

* **Your Task:**

* Add Extreme Basket Weaving to your array of hobbies.

```
db.students.update({name: "Sebastian Fave"},{$push: {hobbies: "Extreme basket weaving"}})
```

* Change the operating system of the student next to you.

```
db.students.update({name: "Stephen R"},{$set: {os: "MacOS"}})
```

* Remove the student to the other side of you from your database.

```
db.students.remove({name: "Mike P"})
```

* Add a field of `gavecandy` with a value of `false` to everyone in the array.

```
db.students.update({}, {$set: {gavecandy: false}}, {multi: true})
```

* Change the value of `gavecandy` to true for yourself.

```
db.students.update({_id: ObjectId("60c2a155030b7df4d3ec8010")}, {$set:  {gavecandy: true}})
```

## 🏆 Bonus

* Insert five more documents with one command. Use [https://docs.mongodb.com/manual/tutorial/insert-documents/](https://docs.mongodb.com/manual/tutorial/insert-documents/) to see how you can accomplish this.

```
db.students.insertMany([{...},{...},{...},{...}])

db.students.find(
    {$or:[
        {"hobbies":{"$in":["Reading"]}},
        {"os":{"$in":["mac"]}}
    ]}
)
```

## 💡 Hint(s)

* Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.
