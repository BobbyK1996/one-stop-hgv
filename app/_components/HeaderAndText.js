function HeaderAndText({ header, children, index: outerIndex }) {
  const isContentArray = Array.isArray(children);

  return (
    <div className='flex flex-col'>
      {header && (
        <h1 className="text-accent-300 relative mb-4 inline-block border-b border-primary-200 text-3xl duration-200 ease-in-out before:absolute before:bottom-0 before:left-0 before:w-full before:origin-bottom-left before:scale-x-0 before:scale-y-0 before:border-b-2 before:border-l-2 before:border-primary-200 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] after:absolute after:right-0 after:top-0 after:w-full after:origin-top-right after:scale-x-0 after:scale-y-0 after:border-r-2 after:border-t-2 after:border-primary-200 after:transition-transform after:duration-300 after:ease-in-out after:content-[''] hover:border-transparent hover:before:scale-x-100 hover:before:scale-y-100 hover:after:scale-x-100 hover:after:scale-y-100 sm:text-4xl">
          {header}
        </h1>
      )}

      {!isContentArray && children}

      {isContentArray && (
        <ul>
          {children.map((item, itemIndex) => {
            const itemNumber = `${outerIndex + 1}.${itemIndex + 1}`;

            if (item.mainContent) {
              return (
                <li
                  key={itemIndex}
                  className='flex flex-col mt-2 mb-10 gap-y-2'
                >
                  <span className='flex gap-x-4'>
                    <span className='flex-shrink-0 w-8'>{itemNumber}</span>
                    <span>{item.mainContent}</span>
                  </span>

                  {item.subContent && (
                    <ul className='pl-6'>
                      {item.subContent.map((subItem, subIndex) => {
                        const subItemNumber = `${itemNumber}.${subIndex + 1}`;
                        return (
                          <li key={subIndex} className='flex gap-x-4'>
                            <span className='flex-shrink-0 w-8'>
                              {subItemNumber}
                            </span>
                            <span>{subItem}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={itemIndex} className='flex gap-x-4'>
                  <span className='flex-shrink-0 w-8'>{itemNumber}</span>
                  <span>{item}</span>
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
}

export default HeaderAndText;
