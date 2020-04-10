package com.example.hu.graphql.resolver;
import com.example.hu.graphql.domain.Tag;
import com.example.hu.graphql.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;

@Component
public class TagMutation implements GraphQLMutationResolver {

    @Autowired
    public void setTagRepository(TagRepository greetingRepository) {
        this.tagRepository = greetingRepository;
    }

    private TagRepository tagRepository;

    public Tag newTag(String name) {
        Tag tag = new Tag();
        tag.setName(name);

        return tagRepository.save(tag);
    }
}
