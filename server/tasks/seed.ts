export default defineTask({
    meta: {
      name: 'db:seed',
      description: 'Run database seed task'
    },
    async run() {
      console.log('Running DB seed task...')
      const guards = [
        {
          name: 'John Doe',
        },
        {
          name: 'Jane Doe',
        }
      ]
      await useDrizzle().insert(tables.guard).values(guards)
      return { result: 'success' }
    }
  })
  