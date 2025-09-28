import React, { useState } from 'react';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const Category = [
  {
    category: 'Low',
    className: 'bg-[#7990F8]/15',
    icon: <RiCalendarTodoLine />,
    count: 40,
  },
  {
    category: 'Medium',
    className: 'bg-[#46CF8B]/15',
    icon: <RiCalendarTodoLine />,
    count: 20,
  },
  {
    category: 'High',
    className: 'bg-[#BC5EAD]/15',
    icon: <RiCalendarTodoLine />,
    count: 3,
  },
  {
    category: 'Done',
    className: 'bg-[#007BFF]/15',
    icon: <IoCheckmarkDoneSharp />,
    count: 3,
  },
];

const Content = [
  {
    id: 1,

    description: 'Clean the car thoroughly including interior and exterior',
    category: 'Low',
    completed: false,
  },
  {
    id: 2,

    description: 'Buy vegetables, fruits, and household items',
    category: 'Medium',
    completed: false,
  },
  {
    id: 3,

    description: 'Discuss project requirements and timeline',
    category: 'High',
    completed: true,
  },
  {
    id: 4,

    description: '30 minutes morning workout routine',
    category: 'Low',
    completed: false,
  },
  {
    id: 5,

    description: '30 minutes morning workout routine',
    category: 'Low',
    completed: false,
  },
  {
    id: 6,

    description: '30 minutes morning workout routine',
    category: 'Low',
    completed: false,
  },
  {
    id: 7,

    description: '30 minutes morning workout routine',
    category: 'Low',
    completed: false,
  },
  {
    id: 8,

    description: '30 minutes morning workout routine',
    category: 'Low',
    completed: false,
  },
  {
    id: 9,

    description: '30 minutes morning workout routine',
    category: 'Low',
    completed: false,
  },
];

const Todolist = () => {
  const [todos, setTodos] = useState(Content);

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Get the background and text color based on the category.
   *
   * @param {string} category - The category of the todo item.
   * @returns {string} - A string containing the background and text color.
   */
  /*******  9f23f606-8f35-4920-a09b-95c050a6dd29  *******/ const getCategoryColor =
    (category) => {
      switch (category) {
        case 'Low':
          return 'bg-[#7990F8]/15 text-[#7990F8]';
        case 'Medium':
          return 'bg-[#46CF8B]/15 text-[#46CF8B]';
        case 'High':
          return 'bg-[#BC5EAD]/15 text-[#BC5EAD]';
        case 'Done':
          return 'bg-[#007BFF]/15 text-[#007BFF]';
        default:
          return 'bg-gray-200 text-gray-500';
      }
    };
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-2/3 h-5/6 border  border-gray-300 rounded-2xl p-6 flex flex-col'>
        <div className='flex justify-between items-center mb-6'>
          <span className='text-6xl'>
            <b>Today</b> 28 Dec
          </span>
          <img
            src='https://i.pinimg.com/736x/c8/2c/e8/c82ce8f42c755343d6f854607c0228c3.jpg'
            alt='pp'
            className='w-40 h-40 object-cover rounded-full border-2 border-gray-300'
          />
        </div>
        <div className='flex flex-wrap gap-3 pb-3'>
          {Category.map((item, index) => (
            <div
              key={index}
              className={`${item.className} w-50 h-30 rounded-lg flex flex-col `}
            >
              <div className='flex flex-col px-8 py-8'>
                <div className='flex items-center justify-between'>
                  {' '}
                  {item.icon}
                  <span className='text-gray-500 font-bold text-2xl'>
                    {item.count}
                  </span>
                </div>
                <span className='text-sm font-medium text-gray-500 '>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='flex-1 overflow-y-auto '>
          <div className='flex flex-wrap   gap-4'>
            {todos.map((item, index) => (
              <div
                key={index}
                className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg min-w-[300px ] w-[calc(50%-8px)]'
              >
                <input
                  type='checkbox'
                  checked={item.completed}
                  onChange={() => handleToggleComplete(item.id)}
                  className='mt-1 w-5 h-5 text-blue-600 rounded'
                />
                <div className='flex-1'>
                  <div
                    className={
                      item.completed ? 'line-through text-gray-500' : ''
                    }
                  >
                    {item.description}
                  </div>
                  <div
                    className={`py-2 px-4 inline-block text-sm rounded-lg mt-2 ${
                      item.completed
                        ? 'bg-gray-500/15 text-gray-500 line-through'
                        : getCategoryColor(item.category)
                    }`}
                  >
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
