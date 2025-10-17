import type { Schema, Struct } from '@strapi/strapi';

export interface ContenctWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_contenct_why_choose_uses';
  info: {
    description: '';
    displayName: 'Why Choose Us';
    icon: 'archive';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    img_1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img_2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ElementAboutComponent extends Struct.ComponentSchema {
  collectionName: 'components_element_about_components';
  info: {
    displayName: 'About component';
    icon: 'database';
  };
  attributes: {
    about_title: Schema.Attribute.Component<'element.about-home', false>;
  };
}

export interface ElementAboutHome extends Struct.ComponentSchema {
  collectionName: 'components_element_about_homes';
  info: {
    displayName: 'About home';
    icon: 'chartPie';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    img_1: Schema.Attribute.Media<'images'>;
    img_2: Schema.Attribute.Media<'images'>;
    Sub_title: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ImgTextImgBlockLeft extends Struct.ComponentSchema {
  collectionName: 'components_img_text_img_block_lefts';
  info: {
    description: '';
    displayName: 'img-block-left';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ImgTextImgText extends Struct.ComponentSchema {
  collectionName: 'components_img_text_img_texts';
  info: {
    displayName: 'img_text';
  };
  attributes: {};
}

export interface ImgImg extends Struct.ComponentSchema {
  collectionName: 'components_img_imgs';
  info: {
    displayName: 'img';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ParagraphCenterParagraphCenter extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_center_paragraph_centers';
  info: {
    displayName: 'paragraph_center';
  };
  attributes: {
    paragraph_center: Schema.Attribute.Blocks;
  };
}

export interface ParagraphLeftParagraphLeft extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_left_paragraph_lefts';
  info: {
    displayName: 'paragraph_left';
  };
  attributes: {
    paragraph_left: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TitleCenterTitleCenter extends Struct.ComponentSchema {
  collectionName: 'components_title_center_title_centers';
  info: {
    displayName: 'title_center';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface TitleLeftTitleLeft extends Struct.ComponentSchema {
  collectionName: 'components_title_left_title_lefts';
  info: {
    displayName: 'title_left';
  };
  attributes: {
    title_left: Schema.Attribute.String;
  };
}

export interface TitleTextTitleText extends Struct.ComponentSchema {
  collectionName: 'components_title_text_title_texts';
  info: {
    displayName: 'title_text';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface UnitsAvailableUnitsAvailable extends Struct.ComponentSchema {
  collectionName: 'components_units_available_units_availables';
  info: {
    description: '';
    displayName: 'units-available';
    icon: 'grid';
  };
  attributes: {
    bathrooms: Schema.Attribute.Integer;
    bedrooms: Schema.Attribute.String;
    built_area: Schema.Attribute.String;
    floor: Schema.Attribute.Media<'images' | 'files'>;
    garage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    housing_number: Schema.Attribute.String;
    is_available: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    lot_area: Schema.Attribute.String;
    price: Schema.Attribute.String;
    storage_room: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contenct.why-choose-us': ContenctWhyChooseUs;
      'element.about-component': ElementAboutComponent;
      'element.about-home': ElementAboutHome;
      'img-text.img-block-left': ImgTextImgBlockLeft;
      'img-text.img-text': ImgTextImgText;
      'img.img': ImgImg;
      'paragraph-center.paragraph-center': ParagraphCenterParagraphCenter;
      'paragraph-left.paragraph-left': ParagraphLeftParagraphLeft;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'title-center.title-center': TitleCenterTitleCenter;
      'title-left.title-left': TitleLeftTitleLeft;
      'title-text.title-text': TitleTextTitleText;
      'units-available.units-available': UnitsAvailableUnitsAvailable;
    }
  }
}
