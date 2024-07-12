type Page = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
  
  };
  
  const page1: Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
   
  };
  
  const page2: Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  };