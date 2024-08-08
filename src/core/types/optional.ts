export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

// Exemplo de uso:
// Definindo um tipo onde 'age' e 'email' são opcionais, e 'name' é obrigatório.
//type UserWithOptionalAgeAndEmail = Optional<User, 'age' | 'email'>;

// Resultado:
// {
//   name: string;
//   age?: number;    // opcional
//   email?: string;  // opcional
// }
