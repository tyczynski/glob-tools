import { useState, type FormEvent } from 'react';
import globToRegexp from 'glob-to-regexp';

import { HomeLayout } from '~/components/layouts/HomeLayout';
import { Form } from '~/components/glob-transformer/Form';

const HomePage = () => {

  return (
    <HomeLayout>
      <Form />
    </HomeLayout>
  );
};

export default HomePage;
