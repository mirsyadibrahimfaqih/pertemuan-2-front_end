import React from 'react';

const Todo = () => {
    main()
    return (
        <div>
            <h2>Check in your console</h2>
        </div>
    );
}

// Jangan mengubah apapun pada function main
const main = () => {
    console.log("# Get All Users");
    all()

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics"
    };
    store(newUser)

    console.log("# Edit User: Isfa")
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    }
    update(1, editedUser)

    console.log("# Delete User: Nurul");
    destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const users = [
    {
        name: "Iryad",
        age: 18,
        major: "Pengembangan Perangkat Lunak"
    },
    {
        name: "Okita",
        age: 19,
        major: "Rekayasa Perangkat Lunak"
    },
    {
        name: "Ifaq",
        age: 19,
        major: "Digital Marketing"
    },
    {
        name: "Zora",
        age: 19,
        major: "Multimedia"
    },
    {
        name: "Tama",
        age: 18,
        major: "Pengembangan Perangkat Lunak"
    }
]

// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
    for(const user of users) {
        console.log(`Name: ${user.name}, age: ${user.age}, major: ${user.major}`)
    }
}

// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (user) => {
    users.push(user)
}

// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, newUser) => {
    if (index >= 0 && index < users.length) {
      users[index] = newUser;
      console.log(`Data pengguna dengan indeks ${index} telah diperbarui.`);
    } else {
      console.log(`Indeks ${index} tidak valid.`);
    }
  };

// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
    if (index >= 0 && index < users.length) {
      users.splice(index, 1); 
      console.log(`Data pengguna dengan indeks ${index} telah dihapus.`);
    } else {
      console.log(`Indeks ${index} tidak valid.`);
    }
  };

export default Todo;
