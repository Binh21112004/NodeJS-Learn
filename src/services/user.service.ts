import getConnection from "config/database";
import { prisma } from "config/client";
const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string) => {

  //insert into db

  // A simple SELECT query
  const newUser = await prisma.user.create({
    data: {
      name: fullName,
      email: email,
      address: address
    }

  })
  return newUser;

}

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;

}


const handleDeleteUser = async (id: string | string[]) => {
  const deleteUser = await prisma.user.delete({
  where: {
    id : +id,
  },
});
  return deleteUser;
}

const getUserById = async (id: string | string[]) => {

  const user = await prisma.user.findUnique({
    where : {
      id : + id
    }
  });

  return user;

}



const updateUserById = async (fullName: string,
  email: string,
  address: string, id: string | string[]) => {

  const updatedUser = await prisma.user.update({
    where: {
      id: +id
    },
    data: {
      name: fullName,
      email: email,
      address : address
    },
  });
  return updateUserById;

}




export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, updateUserById }