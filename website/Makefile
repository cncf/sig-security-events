serve:
	hugo server \
		--buildDrafts \
		--buildFuture \
		--disableFastRender \
		--enableGitInfo

production-build:
	hugo \
	--enableGitInfo \
	--minify

preview-build:
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--enableGitInfo \
		--minify

