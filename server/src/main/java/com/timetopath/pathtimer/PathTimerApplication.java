package com.timetopath.pathtimer;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.Version;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.hubspot.dropwizard.guice.GuiceBundle;
import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class PathTimerApplication extends Application<PathTimerConfiguration> {

	public static void main(String[] args) throws Exception {
		new PathTimerApplication().run(args);
	}

	@Override
	public void initialize(Bootstrap<PathTimerConfiguration> bootstrap) {

		GuiceBundle<PathTimerConfiguration> guiceBundle = GuiceBundle.<PathTimerConfiguration>newBuilder()
				.addModule(new PathTimerModule())
				.enableAutoConfig(getClass().getPackage().getName())
				.setConfigClass(PathTimerConfiguration.class)
				.build();

		bootstrap.addBundle(guiceBundle);
	}

  @Override
  public void run(PathTimerConfiguration configuration, Environment environment) throws Exception {
		SimpleModule module = new SimpleModule("PathTimerModule", new Version(1, 0, 0, null, null, null));
    ObjectMapper mapper = environment.getObjectMapper();
		mapper.enable(SerializationFeature.INDENT_OUTPUT);
		mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    mapper.setVisibility(PropertyAccessor.FIELD, Visibility.ANY);
		mapper.registerModule(module);
    mapper.registerModule(new JavaTimeModule());
  }
}
