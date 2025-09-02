import { db } from "@/prisma/db";
import TodoList from "./ui/todo-list";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main>
      <TodoList defaultTodos={todos} />
      <h1>Test CI</h1>
    </main>
  );
}
